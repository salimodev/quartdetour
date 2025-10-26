# Utilise l’image officielle FrankenPHP
FROM dunglas/frankenphp

# Variables d'environnement
ENV SERVER_NAME=ton-domaine.com
ENV APP_RUNTIME=Runtime\\FrankenPhpSymfony\\Runtime
ENV APP_ENV=prod
ENV FRANKENPHP_CONFIG="worker ./public/index.php"

# Installation des dépendances système + extensions PHP utiles
RUN apt-get update && apt-get install -y \
    git \
    unzip \
    libpq-dev \
    libicu-dev \
    libzip-dev \
    zip \
    && docker-php-ext-install intl pdo pdo_mysql zip opcache \
    && apt-get clean && rm -rf /var/lib/apt/lists/*

# Installer Composer (copié depuis l’image officielle Composer)
COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

# Définir le répertoire de travail
WORKDIR /app

# Copier le projet Symfony dans le conteneur
COPY . .

# Installer les dépendances Symfony (prod)
RUN composer install --no-dev --optimize-autoloader

# Donner les bons droits à Symfony
RUN chown -R www-data:www-data /app/var

# Port exposé par FrankenPHP
EXPOSE 80

# Lancer FrankenPHP
CMD ["frankenphp", "run", "--config", "worker ./public/index.php"]
