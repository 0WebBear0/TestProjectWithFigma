<template>
  <div class="admin-panel">
    <Sidebar/>
    <div class="base-place">

    </div>
  </div>
</template>

<script>

import Sidebar from "~/components/UI/Sidebar";
export default {
  name: 'IndexPage',
  components: {Sidebar},
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
  background-color: #EB4141;
}
</style>
