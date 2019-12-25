# denverpost

Undo that silly encoding.

[![Build Status](https://travis-ci.org/reergymerej/denverpost.svg?branch=master)](https://travis-ci.org/reergymerej/denverpost)

https://twitter.com/raganwald/status/1209633739573223425/

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Amusing:<br><br>If you try to read a <a href="https://twitter.com/denverpost?ref_src=twsrc%5Etfw">@denverpost</a> article in reader mode, without allowing Distracting video, popups, embedded trackers and malware, it encrypts the article.<br><br>See if you can break the code. <a href="https://t.co/PasqR8LiCu">pic.twitter.com/PasqR8LiCu</a></p>&mdash; Reginald Braithwaite (@raganwald) <a href="https://twitter.com/raganwald/status/1209633739573223425?ref_src=twsrc%5Etfw">December 25, 2019</a></blockquote>


## Usage

```js
import { decode } from 'denverpost'

decode('B cboe pg mbshf espoft')
// 'A band of large drones'
```

This is also available through a Chrome extension that will remove all the
modals, restore scrolling, unblur, and decode after a few seconds automatically.

![demo](http://g.recordit.co/YFdDe3OVP0.gif)
