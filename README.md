# Microsoft Login Accelerator

## Account Chooser
Automatically chooses the only available Microsoft account on login. If multiple are available, prefers the one with 'Admin' in its name.

Intended for usecases where you typically only have one Microsoft login active per context or alternatively have additional ones injected from OS.

See [script](script.js)

## Stay signed in prompt
Selects "Don't ask again" and selects "Yes" on the stay signed in prompt as this somehow keeps reappearing for me..

See [script](stay_signed_in.js)

## How to use
Install browser extension [Tapermonkey](https://www.tampermonkey.net/) or compatible and add scripts directly. Metadata will auto update.
Works well if different accounts are separated by [Firefox Containers](https://addons.mozilla.org/en-US/firefox/addon/multi-account-containers/)
