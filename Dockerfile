# 1️⃣ Image PHP 8.2 avec Apache
FROM php:8.2-apache

# 2️⃣ Installer dépendances système
RUN apt-get update && apt-get install -y \
    libicu-dev \
    libonig-dev \
    libzip-dev \
    zip \
    unzip \
    git \
    && docker-php-ext-install intl pdo pdo_mysql zip opcache

# 3️⃣ Installer Composer
COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

# 4️⃣ Copier le projet dans le container
COPY . /var/www/html/

# 5️⃣ Définir le répertoire de travail
WORKDIR /var/www/html

# 6️⃣ Installer toutes les dépendances (y compris require-dev) pour le build
RUN composer install --optimize-autoloader --no-interaction

# 7️⃣ Construire le cache Symfony
RUN php bin/console cache:clear --env=prod --no-debug

# 8️⃣ Supprimer les packages de dev pour alléger l'image
RUN composer install --no-dev --optimize-autoloader --no-interaction

# 9️⃣ Donner les droits sur var/ et vendor/
RUN chown -R www-data:www-data /var/www/html/var /var/www/html/vendor

# 🔟 Activer Apache rewrite pour Symfony
RUN a2enmod rewrite

# 1️⃣1️⃣ Exposer le port 80
EXPOSE 80

# 1️⃣2️⃣ Commande pour démarrer Apache
CMD ["apache2-foreground"]
