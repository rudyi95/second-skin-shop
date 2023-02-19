import React from 'react'

import { Tooltip, TooltipProps } from '@mui/material'

interface IProps {
    title?: string
}

export const CustomTooltip: React.FC<Omit<TooltipProps, 'title'> & IProps> = ({ title, children, ...props }) => {
  if (title) {
    return <Tooltip title={title} {...props}>{children}</Tooltip>
  } else {
    return children
  }
}
