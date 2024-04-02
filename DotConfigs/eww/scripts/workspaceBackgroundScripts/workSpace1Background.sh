#!/bin/sh
source "$(dirname "$0")/colors.sh"
tag="0" # tags start from zero, so it's going to be (workspace - 1)

busy=$(wmctrl -l -p | grep " ${tag} ")
trimmed_busy="$(echo -e "${busy}" | sed -e 's/^[[:space:]]//' -e 's/[[:space:]]$//')"


desktops=$(wmctrl -d | awk '{print $2}')
thisDesktopLong=$(echo "${desktops:0:1}")
thisDesktop=$(echo "${thisDesktopLong:0:1}")

if [ "$thisDesktop" != "-" ]; then
echo "${activecolor}"
elif [ -n "$trimmed_busy" ]; then
echo "${busycolor}"
else 
  echo "${notusedcolor}"
fi