#!/usr/bin/env bash

echo "$@" | # input text
 openssl enc \
  -d `# decode` \
  -aes-256-cbc `# ciphername` \
  -base64 `# base64`
