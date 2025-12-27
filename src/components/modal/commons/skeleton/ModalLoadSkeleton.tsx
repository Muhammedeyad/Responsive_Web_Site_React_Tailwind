import { Skeleton } from '@mui/material'
import type { ModalSkeletonType } from '../../../../types/modaltype'

export const ModalLoadSkeleton = ({
    height,
    width
}: ModalSkeletonType) => {
    return  <Skeleton width={width} sx={{bgcolor: 'lightgray'}} variant="rectangular" animation='wave' height={height} />
}
