server {
  listen {% if use_ssl %} 443 ssl {% else %} 80 {% endif %};
  server_name {{ domains }};


  {% if use_ssl %}
  ssl_certificate   {{ ssl_cert }};
  ssl_certificate_key   {{ ssl_key }};
  ssl_protocols SSLv3 TLSv1.1 TLSv1.2;
  ssl_prefer_server_ciphers on;

  ssl_session_cache  shared:SSL:10m;
  ssl_session_timeout  10m;
  {% endif %}

  location / {
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header Host $http_host;
    proxy_redirect off;

    proxy_pass http://127.0.0.1:9500;
  }
}