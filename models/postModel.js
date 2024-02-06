import { Schema, model, models } from "mongoose";

const postSchema = new Schema(
  {
    title: String,
    description: String,
    image: String,
    // description2: String,
    // image2: String,
    // description3: String,
    // image3: String,
    // description4: String,
    // image4: String,
    // description5: String,
    // image5: String,
    // description6: String,
    // image6: String,
    created_at: String,
    title1: String,
    title2: String,
    title3: String,
    title4: String,
    title5: String,
    title6: String,
    title7: String,
    title8: String,
    title9: String,
    title10: String,
    title11: String,
    title12: String,
    title13: String,
    title14: String,
    title15: String,
    title16: String,
    description1: String,
    description2: String,
    description3: String,
    description4: String,
    description5: String,
    description6: String,
    description7: String,
    description8: String,
    description8: String,
    description9: String,
    description10: String,
    description11: String,
    description12: String,
    description13: String,
    description14: String,
    description15: String,
    description16: String,
    image1: String,
    image2: String,
    image3: String,
    image4: String,
    image5: String,
    image6: String,
    image7: String,
  },
  { toJSON: { virtuals: true } }
);

postSchema.virtual("short_description").get(function () {
  return this.description.substr(0, 150) + "...";
});

postSchema.virtual("created_at_formatted").get(function () {
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

const PostModel = models.Post || model("Post", postSchema);

export default PostModel;
