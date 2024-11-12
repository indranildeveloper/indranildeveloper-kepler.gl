// SPDX-License-Identifier: MIT
// Copyright contributors to the indranil-kepler.gl project

import {Effect as EffectInterface, EffectPropsPartial} from '@indranil-kepler.gl/types';
import {LIGHT_AND_SHADOW_EFFECT} from '@indranil-kepler.gl/constants';

import LightingEffect from './lighting-effect';
import PostProcessEffect from './post-processing-effect';

export function createEffect(params: EffectPropsPartial): EffectInterface {
  if (params?.type === LIGHT_AND_SHADOW_EFFECT.type) {
    return new LightingEffect(params);
  }
  return new PostProcessEffect(params);
}
