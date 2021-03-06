import * as projection from './dist/js/index'
import { toMercator, toWgs84 } from './dist/js/index'
import { point } from '@turf/helpers'

// Types test
const pt = point([3, 51])
const projected = toMercator(pt)
const degrees = toWgs84(projected)

// default import
projection.toMercator(pt)
projection.toWgs84(projected)
