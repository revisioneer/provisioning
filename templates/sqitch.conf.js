[core]
  engine = pg
  plan_file = sqitch.plan
  top_dir = .
[core "pg"]
  db_name = {{ database }}
  password = {{ database_password }}
  host = {{ database_host }}
  username = {{ database_user }}
[deploy]
  verify = true
[rebase]
  verify = true