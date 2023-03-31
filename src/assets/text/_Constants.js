var pagename = ["Site Page 0",
                "Site Page 1",
                "Site Page 2",
                "Site Page 3",
                "Site Page 4",
                "Site Page 5",
                "Site Page 6",
                "Site Page 7",
                "Site Page 8",
                "Site Page 9"];
export const pageLink = {};
for (var i = 0; i < pagename.length; i++) {
    pageLink[i] = {name: pagename[i]};
}

var currentTime = new Date();
export const currentYear = currentTime.getFullYear();
