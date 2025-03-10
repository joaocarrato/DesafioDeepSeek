import React from 'react';
import {Pressable} from 'react-native';

import {useAppTheme} from '@hooks';
import {ThemeColors} from '@theme';

import {ArrowLeftIcon} from '../../assets/icons/ArrowLeftIcon';

export interface IconProps {
  size?: number;
  name: IconName;
  color?: ThemeColors;
  onPress?: () => void;
}

export function Icon({size, name, color = 'primary', onPress}: IconProps) {
  const {colors} = useAppTheme();
  const SVGIcon = iconRegistry[name];

  if (onPress) {
    return (
      <Pressable onPress={onPress} hitSlop={10}>
        <SVGIcon size={size} color={colors[color]} />
      </Pressable>
    );
  }

  return <SVGIcon size={size} color={colors[color]} />;
}

const iconRegistry = {
  arrowLeft: ArrowLeftIcon,
};

type IconType = typeof iconRegistry;
type IconName = keyof IconType;
