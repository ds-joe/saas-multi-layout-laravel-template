// Dependencies
import { forwardRef } from 'react';

// Components
import {
  Card,
  CardBody,
  CardDescription,
  CardTitle,
} from '@/Components/Global/Custom/Card';

// Hooks
import useTheme from '@/hooks/useTheme';

// Utils
import { cn } from '@/utilities/tailwind/cn';

// Icons
import { FaAngleDown, FaAngleUp } from 'react-icons/fa6';

// Types
import type { StateCardProps } from '@/types/Components/Dashboard/Utils/StateCard';

const StateCard = forwardRef<HTMLDivElement, StateCardProps>((props, ref) => {
  const Icon = props.Icon;
  const theme = useTheme().dashboard.components.utils.state_card;

  return (
    <Card
      {...props}
      ref={ref}
    >
      <CardBody className={cn(theme.cardBody.base)}>
        <div className={cn(theme.content.wrapper)}>
          <div className={cn(theme.content.textWrapper)}>
            <CardTitle
              className={cn(
                props.free_space_icon
                  ? theme.content.title.freeSpaceIcon
                  : theme.content.title.base,
              )}
            >
              {props.value}
            </CardTitle>
            <CardDescription
              className={cn(
                props.free_space_icon
                  ? theme.content.description.freeSpaceIcon
                  : theme.content.description.base,
              )}
            >
              {props.title}
            </CardDescription>
          </div>

          <p
            className={cn(
              theme.iconWrapper.base,
              props.free_space_icon
                ? theme.iconWrapper.freeSpaceIcon
                : theme.iconWrapper.default,
            )}
          >
            <Icon
              className={cn(
                props.free_space_icon
                  ? theme.icon.freeSpaceIcon
                  : theme.icon.default,
                props.icon_className,
              )}
            />
          </p>
        </div>
        <CardDescription
          className={cn(
            theme.percentageDescription.base,
            props.percentage_position === 'down'
              ? theme.percentageDescription.down
              : theme.percentageDescription.up,
          )}
        >
          <span>{props.percentage}%</span>
          {props.percentage_position === 'down' ? (
            <FaAngleDown />
          ) : (
            <FaAngleUp />
          )}
        </CardDescription>
      </CardBody>
    </Card>
  );
});

export default StateCard;
