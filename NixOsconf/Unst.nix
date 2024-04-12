let
  nixpkgs.config.packageOverrides = pkgs: import (builtins.fetchTarball {
  url = "https://github.com/NixOS/nixpkgs/archive/nixos-unstable.tar.gz";});
  unstable = import <nixos-unstable> { config = { allowUnfree = true; }; };
in {
  environment.systemPackages = with pkgs; [
    arduino-ide
    nixos-unstable.arduino-ide
  ];
}

