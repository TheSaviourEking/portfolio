export const formateDate = (datestr: Date): String => {
    // const date = new Date('2020-02-12');
    const options = { day: '2-digit', month: 'short', year: 'numeric' };
    const formattedDate = datestr.toLocaleDateString('en-GB', options);
    console.log(formattedDate); // "12 Feb 2020"
    return formattedDate;

    // const date = new Date(dateStr);
    // const options: Intl.DateTimeFormatOptions = {
    //     day: 'numeric',
    //     month: 'short',
    //     year: 'numeric',
    // };
    // const formatter = new Intl.DateTimeFormat(locale, options);
    // return formatter.format(date);
}
