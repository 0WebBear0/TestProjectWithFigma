<template>
  <div class="admin-panel">
    <Sidebar/>
    <div class="base-place">
      <BaseContent/>
    </div>
  </div>
</template>

<script>

import Sidebar from "~/components/UI/Sidebar";
import BaseContent from "~/components/UI/BaseContent";
export default {
  name: 'IndexPage',
  components: {BaseContent, Sidebar},
}
</script>

<style scoped >
.admin-panel{
  display: flex;
  flex-direction: row;
  height: 100%;

  padding-left: 60px;
  padding-right: 60px;
}
.base-place{
  margin-left: 53px;
  width: 100%;
}
</style>
