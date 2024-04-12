{ lib, stdenv, fetchzip }:

stdenv.mkDerivation {
  pname = "focalboard";
  version = "7.10.6";
  src = fetchzip {
    url = "https://github.com/mattermost/focalboard/releases/download/v7.10.6/focalboard-linux.tar.gz";
    hash = "sha256-QwS4LrKrG/jdNeF6aj4v+LBmL1ZtPt49gZqGYWv7rMs=";
  };
}
