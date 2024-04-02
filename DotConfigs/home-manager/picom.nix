{ config, pkgs,lib, ... }:
{
    services = {
    picom = {
        enable = false;
        backend = "glx";
      
        package = pkgs.picom.overrideAttrs(o: {
          src = pkgs.fetchFromGitHub {
  owner = "pijulius";
  repo = "picom";
  rev = "982bb43e5d4116f1a37a0bde01c9bda0b88705b9";
  hash = "sha256-YiuLScDV9UfgI1MiYRtjgRkJ0VuA1TExATA2nJSJMhM=";
};
        });

        #extra settings (home-mamanger doesn't have a lot
        settings = {
          animations = false;
        };
        
        

    };
  };
}