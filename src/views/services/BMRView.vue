<template>
<div class="container">
    <div class="row">
        <div class="col-sm-5">
            <listOfComponents />
        </div>
        <div class="col-sm-7">
            <h1>محاسبه آنلاین کالری مورد نیاز روزانه بدن</h1>
            <input class="form-control text-center mt-3" type="text" placeholder="وزن(برحسب کیلوگرم)" v-model="weight" />
            <input class="form-control text-center mt-3" type="text" placeholder=" قد (بر حسب سانتیمتر)" v-model="height" />
            <input class="form-control text-center mt-3" type="text" placeholder=" سن " v-model="age" />
            <button class="btn btn-primary w-100 mt-3" @click="calculate">
                محاسبه
            </button>

            <div class="row">
                <div class="mt-3 col-6 text-center">
                    <div class="card card-body" style="width: 100%">
                        <p class="text-center">خانم ها</p>
                        <p>{{ women }}</p>
                    </div>
                </div>

                <div class="mt-3 col-6 text-center">
                    <div class="card card-body" style="width: 100%">
                        <p class="text-center">آقایان</p>
                        <p>{{ men }}</p>
                    </div>
                </div>
            </div>

            <div class="col-12 mt-5">
                <div class="text-center" style="min-height: 120px">
                    <div class="text-end">
                        <p>
                            افراد بدون فعالیت = کالری مورد نیاز روزانه بدن * 1.2 (فعالیت کم
                            یا بی فعالیت)
                        </p>
                        <P>افراد کم فعالیت = کالری مورد نیاز روزانه بدن * 1.375 (نرمش در
                            حدود 1 تا 3 روز در هفته)</P>
                        <P>افراد با فعالیت متوسط = کالری مورد نیاز روزانه بدن * 1.55 (نرمش
                            در حدود 3 تا 5 روز در هفته)</P>
                        <P>افراد فعال = کالری مورد نیاز روزانه بدن * 1.725 (ورزش
                            روزانه)</P>
                        <P>افراد بیش فعال = کالری مورد نیاز روزانه بدن * 1.9 (ورزش های
                            سنگین روزانه)</P>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import listOfComponents from "../../components/listOfComponent.vue";
export default {
 components:{listOfComponents},
 data() {
  return {
    women:'',
    men:'',
    weight:'',
    height:'',
    age:''
  }
 },
 methods: {
  calculate(){
    this.women = ((10*this.weight) + (6.25 * this.height) - (5*this.age) - 161 )+'کیلوکالری'
    this.men = ((10*this.weight) + (6.25 * this.height) - (5*this.age) + 5)+'کیلوکالری'
  }
 },
}
</script>
