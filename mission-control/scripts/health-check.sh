#!/bin/bash
# Health check script for Amp Mission Control

URL="https://amplectco.github.io/clawbot-playground/"
STATUS=$(curl -s -o /dev/null -w "%{http_code}" $URL)

if [ "$STATUS" -eq 200 ]; then
  echo "✅ $(date): Site is UP (HTTP $STATUS)"
  exit 0
else
  echo "❌ $(date): Site is DOWN (HTTP $STATUS)"
  exit 1
fi