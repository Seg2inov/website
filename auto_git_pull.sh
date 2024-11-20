#!/bin/bash
cd /public_html/
export GIT_SSH_COMMAND='ssh -i /.ssh/id_rsa'
git pull origin main