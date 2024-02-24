from libqtile import bar, layout#, widget
from libqtile.config import Click, Drag, Group, Key, Match, Screen
from libqtile.lazy import lazy
from libqtile.utils import guess_terminal
from libqtile import qtile
from qtile_extras import widget

from colors import nord_fox,gruvbox
from unicodes import left_arrow,right_arrow

screens = [
    Screen(
        wallpaper='~/.config/Wallpapers/nord_alone_tree.png',
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
        wallpaper='~/.config/Wallpapers/ign_dudeOnBuilding3.png',
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