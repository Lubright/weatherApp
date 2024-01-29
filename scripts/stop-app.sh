set -x
PID=$(lsof -t -i:8081)
if [ -z "${PID}" ]; then
    echo "no node app running..."
  else
    echo "stop app running on port 8081 with PID ${PID}"
    kill -9 ${PID}

fi
set +x