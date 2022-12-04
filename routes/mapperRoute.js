module.exports = {
  'bay_type': req => 'bayType',
  'book_bay': req => 'bookBay',
  'cost_centre': req => 'costCentre',
  'user': req => {
    let method = req.params.method;
    switch(method) {
      case 'invite_user': req.params.method = 'inviteUser'; break;
      case 'init_admin': req.params.method = 'initAdmin'; break;
      case 'check_invite': req.params.method = 'checkInvite'; break;
      default: break;
    }
    return 'user'
  },
  'vehicle': req => {
    if(req.params.method === 'get_history' || req.params._id === 'get_history') {
      if(req.params._id === 'get_history') req.params._id = req.params.method;
      req.params.method = 'getHistory';
    }
    return 'vehicle'
  },
}