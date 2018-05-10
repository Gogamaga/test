<template>
  <div className="container-fluid">
                <Button :label="'назад до списку'" @handleClick="handleBackToList" />
                <div class="row justify-content-center align-items-center" :style="{'height': '80vh'}" >
                    
                        <div class="col-lg-4 col-md-6 col-sm-8">
                            <slot></slot>
                                
                        </div>
                </div>
                
    </div>
</template>

<script>
import Button from "@/components/admin-component/Button";
export default {
    name: "WraperForCreated",
    components: {
        Button
    },
    props: {
        handleBackToList: {
            type: Function,
            default: function() {}
        }
    }
};
</script>
