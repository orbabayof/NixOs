# Edit this configuration file to define what should be installed on
# your system. Help is available in the configuration.nix(5) man page, on
# https://search.nixos.org/options and in the NixOS manual (`nixos-help`).

{ config, lib, pkgs, ... }:

{
  imports =
    [ # Include the results of the hardware scan.
      ./hardware-configuration.nix
    ];
  # Use the systemd-boot EFI boot loader.
  boot.loader.systemd-boot.enable = true;
  boot.loader.efi.canTouchEfiVariables = true;

  # networking.hostName = "nixos"; # Define your hostname.
  # Pick only one of the below networking options.
  # networking.wireless.enable = true;  # Enables wireless support via wpa_supplicant.
   networking.networkmanager.enable = true;  # Easiest to use and most distros use this by default.
   hardware.bluetooth.enable = true;
  # Set your time zone.
  # time.timeZone = "Europe/Amsterdam";
    #time.timeZone = "Europe/Jerusalem";
   services.automatic-timezoned.enable = true;
  # Configure network proxy if necessary
  # networking.proxy.default = "http://user:password@proxy:port/";
  # networking.proxy.noProxy = "127.0.0.1,localhost,internal.domain";

  # Select internationalisation properties.
 #  i18n.defaultLocale = "en_US.UTF-8";
   console = {
     font = "Lat2-Terminus16";
     #keyMap = "us";
     useXkbConfig = true; # use xkb.options in tty.
   };

  #fish settings
    programs.fish.enable = true;
    programs.bash = {
  interactiveShellInit = ''
    if [[ $(${pkgs.procps}/bin/ps --no-header --pid=$PPID --format=comm) != "fish" && -z ''${BASH_EXECUTION_STRING} ]]
    then
      shopt -q login_shell && LOGIN_OPTION='--login' || LOGIN_OPTION=""
      exec ${pkgs.fish}/bin/fish $LOGIN_OPTION
    fi
  '';
};
  # Enable the X11 windowing system.
   services.xserver.enable = true;

  nixpkgs.config.allowUnfree = true;
  services.xserver = {
  layout = "us,il";
  xkbVariant = "workman";
  xkbOptions = "grp:alt_space_toggle";
  displayManager = {
	defaultSession = "none+qtile";
	lightdm.enable = true;
  };
  windowManager = {
	#dwm.enable = true;
	qtile.enable = true;
	qtile.extraPackages = python3Packages: with python3Packages; [
 	 (qtile-extras.overridePythonAttrs(old: { disabledTestPaths = [ "test/widget/test_strava.py" ]; })) #workarounbd for strava test not working, strava will not work
	];
  };
};
  
  
  # Configure keymap in X11
 #  services.xserver.xkb.layout = "us,il";
  # services.xserver.xkb.options = "eurosign:e,caps:escape";

  # Enable CUPS to print documents.
  # services.printing.enable = true;

  # Enable sound.
   #sound.enableMediaKeys = true;
   sound.enable = true;
   hardware.pulseaudio.enable = true;

  # Enable touchpad support (enabled default in most desktopManager).
   services.xserver.libinput.enable = true;

   services.autorandr.enable = true; #enable autorandr,makes errors currently

   programs.dconf.enable = true; #for home-manager gtk
   
  # Define a user account. Don't forget to set a password with ‘passwd’.
   users.users.Light = {
     isNormalUser = true;
     extraGroups = [ "wheel" "audio" ]; # Enable ‘sudo’ and audio devices for Light.
     packages = with pkgs; [
  #     tree
     ];
   };
   services.mysql.enable = true;
   services.mysql.package = pkgs.mariadb;
   programs.thunar.enable = true; 

  # List packages installed in system profile. To search, run:
  # $ nix search wget
   environment.systemPackages = with pkgs; [
     neovim # Do not forget to add an editor to edit configuration.nix! The Nano editor is also installed by default.
     wget
     networkmanager
     firefox
     kitty
     git
     lightdm
     dwm
     qtile
     pavucontrol
     pamixer
     ferdium
     zip
     arduino
     vscode
     brightnessctl
     gscreenshot
     dotnet-sdk_8
     todoist-electron
     discord
     xournalpp
     arandr
     home-manager
     bibata-cursors
     nordic
     mariadb
     zafiro-icons
     ranger
     #python311Packages.qtile-extras
   ];
  fonts.packages = with pkgs; [
  noto-fonts
  noto-fonts-cjk
  noto-fonts-emoji
  liberation_ttf
  fira-code
  fira-code-symbols
  mplus-outline-fonts.githubRelease
  dina-font
  proggyfonts
  font-awesome
  font-awesome_5
  hack-font
];
  # Some programs need SUID wrappers, can be configured further or are
  # started in user sessions.
  # programs.mtr.enable = true;
  # programs.gnupg.agent = {
  #   enable = true;
  #   enableSSHSupport = true;
  # };

  # List services that you want to enable:

  # Enable the OpenSSH daemon.
  # services.openssh.enable = true;

  # Open ports in the firewall.
  # networking.firewall.allowedTCPPorts = [ ... ];
  # networking.firewall.allowedUDPPorts = [ ... ];
  # Or disable the firewall altogether.
  # networking.firewall.enable = false;

  # Copy the NixOS configuration file and link it from the resulting system
  # (/run/current-system/configuration.nix). This is useful in case you
  # accidentally delete configuration.nix.
   system.copySystemConfiguration = true;

  # This option defines the first version of NixOS you have installed on this particular machine,
  # and is used to maintain compatibility with application data (e.g. databases) created on older NixOS versions.
  #
  # Most users should NEVER change this value after the initial install, for any reason,
  # even if you've upgraded your system to a new NixOS release.
  #
  # This value does NOT affect the Nixpkgs version your packages and OS are pulled from,
  # so changing it will NOT upgrade your system.
  #
  # This value being lower than the current NixOS release does NOT mean your system is
  # out of date, out of support, or vulnerable.
  #
  # Do NOT change this value unless you have manually inspected all the changes it would make to your configuration,
  # and migrated your data accordingly.
  #
  # For more information, see `man configuration.nix` or https://nixos.org/manual/nixos/stable/options#opt-system.stateVersion .
  system.stateVersion = "23.11"; # Did you read the comment?

}

