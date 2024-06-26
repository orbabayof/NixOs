# Copyright (c) 2010 Aldo Cortesi
# Copyright (c) 2010, 2014 dequis
# Copyright (c) 2012 Randall Ma
# Copyright (c) 2012-2014 Tycho Andersen
# Copyright (c) 2012 Craig Barnes
# Copyright (c) 2013 horsik
# Copyright (c) 2013 Tao Sauvage
#
# Permission is hereby granted, free of charge, to any person obtaining a copy
# of this software and associated documentation files (the "Software"), to deal
# in the Software without restriction, including without limitation the rights
# to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
# copies of the Software, and to permit persons to whom the Software is
# furnished to do so, subject to the following conditions:
#
# The above copyright notice and this permission notice shall be included in
# all copies or substantial portions of the Software.
#
# THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
# IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
# FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
# AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
# LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
# OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
# SOFTWARE.

from libqtile import bar, layout, widget,hook
from libqtile.config import Click, Drag, Group, Key, Match, Screen
from libqtile.lazy import lazy
from libqtile.utils import guess_terminal
from libqtile import qtile
import os
import subprocess


from colors import nord_fox,gruvbox
from unicodes import left_arrow,right_arrow

mod = "mod1"
terminal = guess_terminal()

keys = [
    # A list of available commands that can be bound to keys can be found
    # at https://docs.qtile.org/en/latest/manual/config/lazy.html
    # Switch between windows
    Key([mod, "shift"], "f", lazy.spawn('ferdium')),
    Key([mod, "shift"], "s", lazy.spawn('gscreenshot')),
    Key([mod], "w", lazy.spawn('firefox')),
    Key([mod], "d", lazy.spawn('todoist-electron')),
    Key([mod], "h", lazy.layout.left(), desc="Move focus to left"),
    Key([mod], "l", lazy.layout.right(), desc="Move focus to right"),
    Key([mod], "j", lazy.layout.down(), desc="Move focus down"),
    Key([mod], "k", lazy.layout.up(), desc="Move focus up"),
    #Key([mod], "space", lazy.layout.next(), desc="Move window focus to other window"),
    # Move windows between left/right columns or move up/down in current stack.
    # Moving out of range in Columns layout will create new column.
    Key([mod, "shift"], "h", lazy.layout.shuffle_left(), desc="Move window to the left"),
    Key([mod, "shift"], "l", lazy.layout.shuffle_right(), desc="Move window to the right"),
    Key([mod, "shift"], "j", lazy.layout.shuffle_down(), desc="Move window down"),
    Key([mod, "shift"], "k", lazy.layout.shuffle_up(), desc="Move window up"),
    # Grow windows. If current window is on the edge of screen and direction
    # will be to screen edge - window would shrink.
    Key([mod, "control"], "h", lazy.layout.grow_left(), desc="Grow window to the left"),
    Key([mod, "control"], "l", lazy.layout.grow_right(), desc="Grow window to the right"),
    Key([mod, "control"], "j", lazy.layout.grow_down(), desc="Grow window down"),
    Key([mod, "control"], "k", lazy.layout.grow_up(), desc="Grow window up"),
    Key([mod], "n", lazy.layout.normalize(), desc="Reset all window sizes"),
    # Toggle between split and unsplit sides of stack.
    # Split = all windows displayed
    # Unsplit = 1 window displayed, like Max layout, but still with
    # multiple stack panes
    Key(
        [mod, "shift"],
        "Return",
        lazy.layout.toggle_split(),
        desc="Toggle between split and unsplit sides of stack",
    ),
    Key([mod, "shift"], "Return", lazy.spawn(terminal), desc="Launch terminal"),
    # Toggle between different layouts as defined below
    Key([mod], "Tab", lazy.next_layout(), desc="Toggle between layouts"),
    Key([mod, "shift"], "c", lazy.window.kill(), desc="Kill focused window"),
    Key(
        [mod],
        "f",
        lazy.window.toggle_fullscreen(),
        desc="Toggle fullscreen on the focused window",
    ),
    Key([mod], "t", lazy.window.toggle_floating(), desc="Toggle floating on the focused window"),
    Key([mod, "control"], "r", lazy.reload_config(), desc="Reload the config"),
    Key([mod, "control"], "q", lazy.shutdown(), desc="Shutdown Qtile"),
    Key([mod], "p", lazy.spawn("rofi -show drun"), desc="Spawn a command using a prompt widget"),
    #Key([mod], "space", lazy.widget["keyboardlayout"].next_keyboard(), desc="Next keyboard layout."),

#####Brightness
Key([], "XF86MonBrightnessUp", lazy.spawn("brightnessctl set 5%+")),
Key([], "XF86MonBrightnessDown", lazy.spawn("brightnessctl set 5%-")),
#####Screenshots
#Key([], "Print", lazy.spawn("scrot -s ./screenshot/%Y-%m-%d-%T-screenshot.png")),
#Key([mod], "Print", lazy.spawn("scrot ./screenshot/%Y-%m-%d-%T-screenshot.png")),
#####Media Keys
Key([], "XF86AudioNext", lazy.spawn("playerctl next")),
Key([], "XF86AudioPrev", lazy.spawn("playerctl previous")),
Key([], "XF86AudioPlay", lazy.spawn("playerctl play-pause")),
Key([], "XF86AudioRaiseVolume", lazy.spawn("amixer set Master 5%+")),
Key([], "XF86AudioLowerVolume", lazy.spawn("amixer set Master 5%-")),
Key([], "XF86AudioMute", lazy.spawn("amixer -D pulse set Master 1+ toggle")),
]

#groups = [Group(i) for i in "123456789"]
groups = [
        Group('1',label="",matches=[Match(wm_class='firefox')]),
        Group('2',label=""),
        Group('3',label=""),
        Group('4',label="",matches=[Match(wm_class='ferdium')]),
        Group('5',label="",matches=[Match(wm_class='todoist')]),
        Group('6',label=""),
        Group('7',label="",matches=[Match(wm_class='discord')]),
]
for i in groups:
    keys.extend(
        [
            # mod1 + letter of group = switch to group
            Key(
                [mod],
                i.name,
                lazy.group[i.name].toscreen(),
                desc="Switch to group {}".format(i.name),
            ),
            # mod1 + shift + letter of group = switch to & move focused window to group
            Key(
                [mod, "shift"],
                i.name,
                lazy.window.togroup(i.name, switch_group=True),
                desc="Switch to & move focused window to group {}".format(i.name),
            ),
            # Or, use below if you prefer not to switch to that group.
            # # mod1 + shift + letter of group = move focused window to group
            # Key([mod, "shift"], i.name, lazy.window.togroup(i.name),
            #     desc="move focused window to group {}".format(i.name)),
        ]
    )

layouts = [
    layout.Columns(
        border_focus_stack=["#d75f5f", "#8f3d3d"],
        border_width=4,
        margin = 0,
        ),
    layout.Max(),
    # Try more layouts by unleashing below layouts.
    # layout.Stack(num_stacks=2),
    # layout.Bsp(),
    # layout.Matrix(),
    # layout.MonadTall(),
    # layout.MonadWide(),
    # layout.RatioTile(),
    # layout.Tile(),
    # layout.TreeTab(),
    # layout.VerticalTile(),
    # layout.Zoomy(),
]

widget_defaults = dict(
    font="hack-font",
    fontsize=20,
    padding=3,
)
extension_defaults = widget_defaults.copy()


screens = [
    Screen(
        wallpaper='~/.config/Wallpapers/katana.jpg',
        wallpaper_mode='fill',
        top=bar.Bar(
            [
                #widget.CurrentLayout(),
                widget.GroupBox(
                    inactive = "#81a1c1", #nord color for inactive windows
                    highlight_method = "line",
                ),
                right_arrow("#4C566A","#2e3440"),
                widget.CurrentLayout(
                    background="#4C566A"
                ),
                right_arrow("#434C5E","#4C566A"),
                widget.WindowCount(
                    background = "#434C5E",
                    show_zero = True
                ),
                right_arrow("#2e3440","#434C5E"),
                widget.Prompt(),
                widget.WindowName(),
                # NB Systray is incompatible with Wayland, consider using StatusNotifier instead
                # widget.StatusNotifier(),
                widget.TextBox(
                    text=" "
                ),
                widget.Battery(
                  format = "{percent:2.0%}",
                  update_interval = 60,
                ),
                widget.TextBox(
                 text = " ",
                 mouse_callbacks = {'Button1': lazy.spawn('pavucontrol')},
                ),
                widget.Volume(
                   padding = 5,
                   update_interval = 0.1,
                   step = 5
                ),
                #widget.Systray(),
                #left_arrow(gruvbox['dark-magenta'],gruvbox['magenta']),
                widget.Clock(
                    #background=gruvbox['magenta'],
                    format=" %Y-%m-%d %a %I:%M %p"),
                #widget.QuickExit(),
                widget.Spacer(
                    length = 10
                )
            ],
            background = "#2e3440",    #nord color
            size = 24,
            
            # border_width=[2, 0, 2, 0],  # Draw top and bottom borders
            # border_color=["ff00ff", "000000", "ff00ff", "000000"]  # Borders are magenta
        ),
        # You can uncomment this variable if you see that on X11 floating resize/moving is laggy
        # By default we handle these events delayed to already improve performance, however your system might still be struggling
        # This variable is set to None (no cap) by default, but you can set it to 60 to indicate that you limit it to 60 events per second
        # x11_drag_polling_rate = 60,
    ),
    Screen(
        
        wallpaper='~/.config/Wallpapers/buildings.png',
        wallpaper_mode='fill',
        top=bar.Bar(
            [
                #widget.CurrentLayout(),
                widget.GroupBox(
                    inactive = "#81a1c1", #nord color for inactive windows
                    highlight_method = "line",
                ),
                right_arrow("#4C566A","#2e3440"),
                widget.CurrentLayout(
                    background="#4C566A"
                ),
                right_arrow("#434C5E","#4C566A"),
                widget.WindowCount(
                    background = "#434C5E",
                    show_zero = True
                ),
                right_arrow("#2e3440","#434C5E"),
                widget.Prompt(),
                widget.WindowName(),
                # NB Systray is incompatible with Wayland, consider using StatusNotifier instead
                # widget.StatusNotifier(),
                widget.TextBox(
                    text=" "
                ),
                widget.Battery(
                  format = "{percent:2.0%}",
                  update_interval = 60,
                ),
                widget.TextBox(
                 text = " ",
                 mouse_callbacks = {'Button1': lazy.spawn('pavucontrol')},
                ),
                widget.Volume(
                   padding = 5,
                   update_interval = 0.1,
                   step = 5
                ),
                #widget.Systray(),
                #left_arrow(gruvbox['dark-magenta'],gruvbox['magenta']),
                widget.Clock(
                    #background=gruvbox['magenta'],
                    format=" %Y-%m-%d %a %I:%M %p"),
                #widget.QuickExit(),
                widget.Spacer(
                    length = 10
                )
            ],
            background = "#2e3440",    #nord color
            size = 24,
            
            # border_width=[2, 0, 2, 0],  # Draw top and bottom borders
            # border_color=["ff00ff", "000000", "ff00ff", "000000"]  # Borders are magenta
        ),
        # You can uncomment this variable if you see that on X11 floating resize/moving is laggy
        # By default we handle these events delayed to already improve performance, however your system might still be struggling
        # This variable is set to None (no cap) by default, but you can set it to 60 to indicate that you limit it to 60 events per second
        # x11_drag_polling_rate = 60,
    ),
]
# Drag floating layouts.
mouse = [
    Drag([mod], "Button1", lazy.window.set_position_floating(), start=lazy.window.get_position()),
    Drag([mod], "Button3", lazy.window.set_size_floating(), start=lazy.window.get_size()),
    Click([mod], "Button2", lazy.window.bring_to_front()),
]

dgroups_key_binder = None
dgroups_app_rules = []  # type: list
follow_mouse_focus = True
bring_front_click = False
floats_kept_above = True
cursor_warp = False
floating_layout = layout.Floating(
    float_rules=[
        # Run the utility of `xprop` to see the wm class and name of an X client.
        *layout.Floating.default_float_rules,
        Match(wm_class="confirmreset"),  # gitk
        Match(wm_class="makebranch"),  # gitk
        Match(wm_class="maketag"),  # gitk
        Match(wm_class="ssh-askpass"),  # ssh-askpass
        Match(title="branchdialog"),  # gitk
        Match(title="pinentry"),  # GPG key password entry
    ]
)
auto_fullscreen = True
focus_on_window_activation = "smart"
reconfigure_screens = True

# If things like steam games want to auto-minimize themselves when losing
# focus, should we respect this or not?
auto_minimize = True

# When using the Wayland backend, this can be used to configure input devices.
wl_input_rules = None

# XXX: Gasp! We're lying here. In fact, nobody really uses or cares about this
# string besides java UI toolkits; you can see several discussions on the
# mailing lists, GitHub issues, and other WM documentation that suggest setting
# this string if your java app doesn't work correctly. We may as well just lie
# and say that we're a working one by default.
#
# We choose LG3D to maximize irony: it is a 3D non-reparenting WM written in
# java that happens to be on java's whitelist.
wmname = "LG3D"
