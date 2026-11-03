# Snake Game

A complete snake game built with pygame, running in a micromamba environment.

## Environment setup

The game lives in the micromamba environment **snake-game** (Python 3.11 + pygame 2.6.1).

```powershell
# One-time environment creation (already done):
micromamba create -n snake-game python=3.11 -y
micromamba install -n snake-game pygame -y
```

## How to run

**Easiest:** double-click `run.bat` (Windows).

**Or from a terminal:**

```powershell
cd "C:\Projects\snake py"
micromamba run -n snake-game python snake_game.py
```

**Or activate the environment first:**

```powershell
micromamba activate snake-game
python snake_game.py
```

## Controls

| Key                    | Action              |
|------------------------|---------------------|
| Arrow keys / WASD      | Move snake          |
| P                      | Pause / resume      |
| R (after game over)    | Restart             |
| Esc                    | Quit                |

## Gameplay

- Eat the red food to grow and earn 10 points.
- The snake speeds up slightly with each food eaten.
- Hitting a wall or your own tail ends the game.
- Score and best score are shown in the top corners.

## Files

- `snake_game.py` - the complete game (classes: `Snake`, `Food`, `Score`, `SnakeGame`)
- `run.bat` - Windows launcher script
- `README.md` - this file

