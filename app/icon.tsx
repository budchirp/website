import { ImageResponse } from 'next/server'
import config from '@/tailwind.config.js'

const runtime = 'edge'
const contentType = 'image/png'
const size = {
  width: 64,
  height: 64
}

const Icon = async (): Promise<ImageResponse> => {
  const colors = (config as any).theme.extend.colors

  return new ImageResponse(
    (
      <div
        style={{
          background: colors['gray'][900],
          color: '#FFFFFF',
          width: '100%',
          height: '100%',
          display: 'flex',
          textAlign: 'center',
          alignItems: 'center',
          justifyContent: 'center'
          // fontFamily: '"Lexend"'
        }}
      >
        <h1 tw="font-bold flex items-center h-full w-full justify-center text-lg p-2">CAN</h1>
      </div>
    ),
    {
      ...size
      // fonts: [
      //   {
      //     name: 'Lexend',
      //     data: fontData,
      //     style: 'normal'
      //   }
      // ]
    }
  )
}

export { runtime, contentType, size }
export default Icon
