# Copier le projet et installer les dépendances
COPY . /var/www/html/
WORKDIR /var/www/html
RUN composer install --optimize-autoloader --no-interaction

# Supprimer require-dev pour alléger l'image
RUN composer install --no-dev --optimize-autoloader --no-interaction

# Permissions et Apache
RUN chown -R www-data:www-data /var/www/html/var /var/www/html/vendor
RUN a2enmod rewrite

EXPOSE 80
CMD ["apache2-foreground"]
