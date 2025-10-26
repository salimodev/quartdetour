FROM php:8.2-fpm

# Installer les dépendances système nécessaires pour Symfony et extensions PHP
RUN apt-get update && apt-get install -y \
    git \
    unzip \
    libicu-dev \
    libonig-dev \
    libzip-dev \
    libxml2-dev \
    zlib1g-dev \
    mariadb-client \
    && docker-php-ext-install intl mbstring pdo pdo_mysql zip opcache

# Copier Composer depuis l'image officielle
COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

WORKDIR /var/www/html
COPY . /var/www/html

ENV APP_ENV=prod

RUN mkdir -p /var/www/html/var /var/www/html/vendor

RUN php -d memory_limit=-1 /usr/bin/composer install --no-dev --optimize-autoloader --ignore-platform-reqs

RUN chown -R www-data:www-data /var/www/html/var /var/www/html/vendor

EXPOSE 80
CMD ["php-fpm"]
