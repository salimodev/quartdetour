# Utiliser PHP 8.2 avec Apache
FROM php:8.2-apache

# Installer les extensions nécessaires pour Symfony et MySQL
RUN apt-get update && apt-get install -y \
    libicu-dev \
    libonig-dev \
    libzip-dev \
    zip \
    unzip \
    git \
    && docker-php-ext-install intl pdo pdo_mysql zip opcache

# Installer Composer
COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

# Copier le projet dans le container
COPY . /var/www/html/

# Définir le répertoire de travail
WORKDIR /var/www/html

# Installer les dépendances Symfony
RUN composer install --no-dev --optimize-autoloader

# Donner les droits sur var/ et vendor/
RUN chown -R www-data:www-data /var/www/html/var /var/www/html/vendor

# Activer Apache rewrite pour Symfony
RUN a2enmod rewrite

# Exposer le port 80
EXPOSE 80

# Démarrer Apache
CMD ["apache2-foreground"]
