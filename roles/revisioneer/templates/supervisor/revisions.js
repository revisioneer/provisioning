[program:revisions]
command={{ home_directory }}/current/revisioneer
autostart=true
autorestart=true
stopsignal=QUIT
stdout_logfile={{ home_directory }}/shared/log/out.log
stderr_logfile={{ home_directory }}/shared/log/err.log
user={{ user }}
directory={{ home_directory }}/current
environment=REV_DSN="user='{{ database_user }}' password='{{ database_password }}' dbname='{{ database }}' sslmode=disable",PORT="9500"