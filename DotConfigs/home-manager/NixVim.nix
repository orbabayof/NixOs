{ pkgs, lib, ... }:
let
  nixvim = import (builtins.fetchGit {
    url = "https://github.com/nix-community/nixvim";
    # If you are not running an unstable channel of nixpkgs, select the corresponding branch of nixvim.
    ref = "nixos-23.11";
  });
in
{
  imports = [
    nixvim.homeManagerModules.nixvim
  ];

  programs.nixvim = {
    enable = true;
    globals.mapleader = " ";

    options = {
      number = true;         # Show line numbers
      relativenumber = false; # Show relative line numbers
      shiftwidth = 2;        # Tab width should be 2
    };
    colorschemes.ayu.enable = true; #nord scheme for neovim
    colorschemes.ayu.extraOptions.mirage = true;
    plugins = {
	telescope.enable = true;
	oil.enable = true;
	treesitter.enable = true;
	luasnip.enable = true;
	nvim-cmp = {
      enable = true;
      autoEnableSources = true;
      sources = [
        {name = "nvim_lsp";}
        {name = "path";}
        {name = "buffer";}
        {name = "luasnip";}
	];
      mapping = {
        "<CR>" = "cmp.mapping.confirm({ select = true })";
        "<Tab>" = {
          action = ''
            function(fallback)
              if cmp.visible() then
                cmp.select_next_item()
              elseif check_backspace() then
                fallback()
              else
                fallback()
              end
            end
          '';
          modes = [ "s" ];
        };
      };
       };
        lualine.enable = true; #cool power line
        lsp = {
            enable = true;

      servers = {
        tsserver.enable = true;

        lua-ls = {
          enable = true;
          settings.telemetry.enable = false;
        };

        rust-analyzer = {
          enable = true;
          installCargo = true;
          installRustc = true;
            };
          };
        };
    };
  };
}
