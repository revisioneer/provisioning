**deprecated**

Do not use this to provision revisioneer. Instead run revisioneer as a container inside an orestrator and use terraform/ ansible/ cloudformation etc. to manage a database.

# revisions-provisioning

ansible provisioning for [revisioneer][1]

Execute using

    ansible-playbook -i hosts playbook.yml

Deployment:

    ansible-playbook -i hosts playbook.yml -u revisioneer -t deploy

[1]:https://github.com/nicolai86/revisioneer
