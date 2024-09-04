<template>
  <svg :style="iconStyle">
    <use :xlink:href="symbolId" />
  </svg>
</template>

<script setup lang="ts" name="SvgIcon">
import { computed } from 'vue'
import type { CSSProperties } from 'vue'

interface SvgProps {
  name: string // 图标的名称（Svg 文件名） ==> 必传
  prefix?: string // 图标的前缀 ==> 非必传（默认为"icon"）
  iconStyle?: CSSProperties // 图标的样式 ==> 非必传
}
// 接收父组件参数并设置默认值
const props = withDefaults(defineProps<SvgProps>(), {
  prefix: 'icon',
  iconStyle: () => ({ width: '50px', height: '50px' })
})

const symbolId = computed(() => `#${props.prefix}-${props.name}`)
</script>
