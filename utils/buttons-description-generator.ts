const buttons = [
  { name: 'MPM', whatsappOnly: true, unpublished: false },
  { name: 'PHONE_NUMBER', whatsappOnly: false, unpublished: false },
  { name: 'COPY_CODE', whatsappOnly: true, unpublished: false },
  { name: 'ORDER_DETAILS', whatsappOnly: true, unpublished: true },
];

function formatList(names: string[], lastSeparator: string): string {
  const allButLast = names.slice(0, -1).join(', ');
  const last = names[names.length - 1];

  return `${allButLast} ${lastSeparator} ${last}`;
}

const generate = () => {
  const isPublic = Boolean(process.env.PUBLIC);

  const visibleButtons = buttons.filter(button =>
    isPublic ? !button.unpublished : true,
  );

  const exclusiveButtons = visibleButtons.map(button => button.name);
  const whatsappOnlyButtons = visibleButtons
    .filter(button => button.whatsappOnly)
    .map(button => button.name);

  return {
    exclusive: formatList(exclusiveButtons, 'or'),
    whatsappOnly: formatList(whatsappOnlyButtons, 'and'),
  };
};

export const buttonsDescription = generate();
