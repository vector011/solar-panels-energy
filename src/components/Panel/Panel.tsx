import { memo, useCallback } from 'react'
import { type ComponentProps } from '@stitches/react'
import { motion } from 'framer-motion'
import Image from 'next/image'

import { Box, Counter, Text } from '~/ui'
import { type ParameterComponent, type ProductModel } from '~/types/models'

type TBaseProps = React.ComponentProps<typeof motion.article>
type TStyledProps = ComponentProps<typeof Box>

type TProps = {
  data: ProductModel
}

type TPanelProps = Omit<TBaseProps, keyof TProps> & TStyledProps & TProps

const Panel = ({ data, css, ...props }: TPanelProps) => {
  const renderParams = useCallback(
    (item: ParameterComponent) => (
      <Box
        key={item?.id}
        css={{
          flexDirection: 'row',
          alignItems: 'center',
          gap: '$big',
        }}
      >
        <Box
          as={Image}
          src={item?.icon?.url}
          alt={item?.text}
          width={35}
          height={35}
          css={{
            objectFit: 'contain',
            objectPosition: 'left',
            userSelect: 'none',
            pointerEvents: 'none',
          }}
        />

        <Text
          as="span"
          variant="paragraph2"
          css={{
            color: '$light',
            textTransform: 'uppercase',
          }}
        >
          {item?.text}
        </Text>
      </Box>
    ),
    []
  )

  return (
    <Box
      as={motion.article}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      {...props}
      css={{
        alignItems: 'center',
        padding: '$9',
        gap: '$7',
        ...css,
      }}
    >
      <Box
        as={Image}
        src={data?.image?.url}
        alt={data?.slug}
        width={240}
        height={150}
        css={{
          width: '100%',
          maxWidth: 240,
          objectFit: 'contain',
          objectPosition: 'center',
          aspectRatio: '16/9',
        }}
      />

      <Box css={{ justifyContent: 'space-between', gap: '$7', flex: 1 }}>
        <Box css={{ gap: '$8' }}>
          <Text
            as="h2"
            variant="paragraph2"
            css={{
              color: '$light',
              textTransform: 'uppercase',
            }}
          >
            {data?.name}
          </Text>

          {data?.parameters?.map(renderParams)}
        </Box>

        <Counter data={data} css={{ justifySelf: 'flex-end' }} />
      </Box>
    </Box>
  )
}

export default memo(Panel) as typeof Panel
