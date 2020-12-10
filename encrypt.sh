#!/usr/bin/env bash

echo "$@" | # input text
 openssl enc \
  -e `# encode` \
  -aes-256-cbc `# ciphername` \
  -base64 `# base64` \
  -salt # use salt (randomly generated or provide with -S option) when encrypting (this is the default).
