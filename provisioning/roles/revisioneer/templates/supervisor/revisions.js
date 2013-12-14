[program:revisions]
command={{ home_directory }}/current/revisioneer
autostart=true
autorestart=true
stopsignal=QUIT
stdout_logfile={{ home_directory }}/shared/log/out.log
stderr_logfile={{ home_directory }}/shared/log/err.log
user={{ user }}
directory={{ home_directory }}/current
environment=REV_DSN="user='{{ db_user }}' password='{{ db_password }}' dbname='{{ db }}' sslmode=disable",PORT="9500"