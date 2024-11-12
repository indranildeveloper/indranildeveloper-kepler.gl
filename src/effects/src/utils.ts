// SPDX-License-Identifier: MIT
// Copyright contributors to the indranildeveloper-kepler.gl project

import {Effect as EffectInterface, EffectPropsPartial} from '@indranildeveloper-kepler.gl/types';
import {LIGHT_AND_SHADOW_EFFECT} from '@indranildeveloper-kepler.gl/constants';

import LightingEffect from './lighting-effect';
import PostProcessEffect from './post-processing-effect';

export function createEffect(params: EffectPropsPartial): EffectInterface {
  if (params?.type === LIGHT_AND_SHADOW_EFFECT.type) {
    return new LightingEffect(params);
  }
  return new PostProcessEffect(params);
}
