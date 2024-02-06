import { Schema, model, models } from "mongoose";

const enquirySchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    created_at: {
      type: String,
      required: true,
    },
    //-----------------------------------------------------Additional Data
    description1: {
      type: String,
    },
    description2: {
      type: String,
    },
    description3: {
      type: String,
    },
    description4: {
      type: String,
    },
    description5: {
      type: String,
    },
    description6: {
      type: String,
    },
    description7: {
      type: String,
    },
    description8: {
      type: String,
    },
    description9: {
      type: String,
    },
    description10: {
      type: String,
    },
    description11: {
      type: String,
    },
    description12: {
      type: String,
    },
    description13: {
      type: String,
    },
    description14: {
      type: String,
    },
    description15: {
      type: String,
    },
    description16: {
      type: String,
    },
    image1: {
      type: String,
    },
    image2: {
      type: String,
    },
    image3: {
      type: String,
    },
    image4: {
      type: String,
    },
    image5: {
      type: String,
    },
    image6: {
      type: String,
    },
    image7: {
      type: String,
    },
    title1: {
      type: String,
    },
    title2: {
      type: String,
    },
    title3: {
      type: String,
    },
    title4: {
      type: String,
    },
    title5: {
      type: String,
    },
    title6: {
      type: String,
    },
    title7: {
      type: String,
    },
    title8: {
      type: String,
    },
    title9: {
      type: String,
    },
    title10: {
      type: String,
    },
    title11: {
      type: String,
    },
    title12: {
      type: String,
    },
    title13: {
      type: String,
    },
    title14: {
      type: String,
    },
    title15: {
      type: String,
    },
    title16: {
      type: String,
    },

    //-----------------------------------------------------Additional Data
  },
  { toJSON: { virtuals: true } }
);

enquirySchema.virtual("short_description").get(function () {
  return this.description.substr(0, 150) + "...";
});

enquirySchema.virtual("created_at_formatted").get(function () {
  return changeDateFormat(this.created_at);
});

function changeDateFormat(date_STR) {
  const date = new Date(date_STR);
  const months = [
    "Januray",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
}

const EnquiryModel = models.Enquiry || model("Enquiry", enquirySchema);

export default EnquiryModel;
