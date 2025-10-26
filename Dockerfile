# Image PHP officielle avec FPM
FROM php:8.2-fpm

# Installer les dépendances nécessaires pour Symfony et Composer
RUN apt-get update && apt-get install -y \
    git \
    unzip \
    libicu-dev \
    libonig-dev \
    libzip-dev \
    libxml2-dev \
    mariadb-client \
    && docker-php-ext-install intl mbstring pdo pdo_mysql zip opcache

# Copier Composer depuis l'image officielle
COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

# Définir le répertoire de travail
WORKDIR /var/www/html

# Copier le projet
COPY . /var/www/html

# Créer les dossiers var et vendor s'ils n'existent pas
RUN mkdir -p /var/www/html/var /var/www/html/vendor

# Installer les dépendances PHP avec Composer
RUN php -d memory_limit=-1 /usr/bin/composer install --no-dev --optimize-autoloader

# Donner les droits nécessaires après l'installation de Composer
RUN chown -R www-data:www-data /var/www/html/var /var/www/html/vendor

# Exposer le port
EXPOSE 80

# Commande pour démarrer PHP-FPM
CMD ["php-fpm"]
