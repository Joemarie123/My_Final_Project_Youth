<template>
  <v-navigation-drawer app color="#0F0A1E" right width="260">
    <v-toolbar color="rgba(0,0,0,0)" flat class="d-flex justify-center">
    

      <v-btn text color="#7C7C7F" class="withoutupercase">Tagum City Youth Office</v-btn>
      <v-btn icon dark class="ml-n3">
        <v-icon x-small color="#C3F942">fas fa-chevron-down</v-icon>
      </v-btn>
    </v-toolbar>
    <v-divider color="grey" class="mx-6"></v-divider>
    <v-row>
      <v-col cols="12" sm="6" class="pa-6">
        <strong class="ml-3 grey--text caption">Over All Total</strong><br />
        <strong class="ml-3 white--text">1.186</strong>
      </v-col>
      <v-col cols="12" sm="6" class="pa-4 mt-3">
        <v-sparkline
          :value="value"
          :smooth="radius || false"
          :padding="padding"
          :line-width="width"
          :stroke-lineCap="lineCap"
          :fill="fill"
          :type="type"
          :auto-line-width="autoLineWidth"
          :color="color"
          :height="height"
          auto-draw
        >
        </v-sparkline> </v-col
      >>
    </v-row>
    <v-list subheader two-line dark>
      <v-list-item v-for="file in flags" :key="file.title">
        <v-list-item-avatar>
          <img :src="file.avatar" />
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title v-text="file.title"></v-list-item-title>
        </v-list-item-content>
        <v-list-item-action>
          <v-list-item-subtitle v-text="file.subtitle"></v-list-item-subtitle>
        </v-list-item-action>
      </v-list-item>
    </v-list>
    <v-divider color="grey" class="mx-6 mb-5"></v-divider>
  
  </v-navigation-drawer>
</template>

<script>
export default {
  data: () => ({
  
    flags: [
      {
        avatar: "apokon.jpg",
        title: "Apokon",
        subtitle: "64%",
      },
      {
        avatar: "apokon.jpg",
        title: "Apokon",
        subtitle: "64%",
      },
      {
        avatar: "apokon.jpg",
        title: "Apokon",
        subtitle: "64%",
      },
      {
        avatar: "apokon.jpg",
        title: "Apokon",
        subtitle: "64%",
      },
      {
        avatar: "apokon.jpg",
        title: "Apokon",
        subtitle: "64%",
      },
      {
        avatar: "apokon.jpg",
        title: "Apokon",
        subtitle: "64%",
      },
      {
        avatar: "apokon.jpg",
        title: "Apokon",
        subtitle: "64%",
      },
      {
        avatar: "apokon.jpg",
        title: "Apokon",
        subtitle: "64%",
      },
      {
        avatar: "apokon.jpg",
        title: "Apokon",
        subtitle: "64%",
      },
      {
        avatar: "apokon.jpg",
        title: "Apokon",
        subtitle: "64%",
      },
      {
        avatar: "apokon.jpg",
        title: "Apokon",
        subtitle: "64%",
      },
      {
        avatar: "apokon.jpg",
        title: "Apokon",
        subtitle: "64%",
      },
      {
        avatar: "apokon.jpg",
        title: "Apokon",
        subtitle: "64%",
      },
      {
        avatar: "apokon.jpg",
        title: "Apokon",
        subtitle: "64%",
      },
      {
        avatar: "apokon.jpg",
        title: "Apokon",
        subtitle: "64%",
      },
    


    ],
    sld: {
      val: 25,
      color: "#C3F942",
    },
  }),
};
</script>

<style>
.v-btn.withoutupercase {
  text-transform: none !important;
}
.col-12 {
  padding: 5px !important;
}
.v-card__subtitle,
.v-card__text,
.v-card__title {
  padding: 0px !important;
}
.v-navigation-drawer .v-list:not(.v-select-list) {
  padding-top: 0px;
}
.v-list-item__avatar {
  margin-bottom: 0px !important;
  margin-top: 0px !important;
}
.v-list--two-line .v-list-item,
.v-list-item--two-line {
  min-height: 50px !important;
}
.v-messages {
  min-height: 0px !important;
}
</style>