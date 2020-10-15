import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      viewBox="0 0 512 512"
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit={2}
      {...props}
    >
      <Path
        d="M315.422 512.003c-76.99 0-134.379-39.613-134.379-134.388V225.833h-69.985v-82.185C188.08 123.652 220.277 57.388 224.004.002h79.946v130.314h93.281v95.517H303.95v132.165c0 39.616 19.987 53.308 51.83 53.308h45.179v100.697h-85.537z"
        fillRule="nonzero"
      />
    </Svg>
  )
}

export default SvgComponent
