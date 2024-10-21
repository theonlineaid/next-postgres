#!/bin/sh

until pg_isready -h postgres -U admin; do
  echo "Waiting for PostgreSQL..."
  sleep 2
done

echo "PostgreSQL is up - executing command"
exec "$@"
