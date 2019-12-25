import * as mod from '.'
import d from '.'

describe('decode', () => {
  it('should return something I can read', () => {
    expect(mod.decode( 'B cboe pg mbshf espoft'))
      .toBe('A band of large drones')

    expect(d( 'Uifsf bsf bu mfbtu 17 espoft; uifz fnfshf fbdi ojhiu bspvoe 7q.n. boe ejtbqqfbs bspvoe 10 q.n., if tbje.'))
      .toBe('There are at least 17 drones; they emerge each night around 7p.m. and disappear around 10 p.m., he said.')
  })
})
