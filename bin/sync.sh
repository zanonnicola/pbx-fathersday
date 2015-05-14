#!/bin/sh

aws s3 sync . s3://fathersday.photobox.co.uk --region eu-west-1 --exclude bin/\* --exclude .git/\* --grants read=uri=http://acs.amazonaws.com/groups/global/AllUsers --cache-control max-age=3600
