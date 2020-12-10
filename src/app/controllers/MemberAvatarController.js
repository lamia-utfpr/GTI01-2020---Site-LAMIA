import { resolve } from 'path';
import fs from 'fs';
import uploadConfig from '../../config/multer';
import Picture from '../models/Picture';
import Member from '../models/Member';
import TypeMember from '../models/TypeMember';

class MemberAvatarController {
  async update(req, res) {
    try {
      const member = await Member.findByPk(req.userId, {
        include: [
          {
            model: TypeMember,
            as: 'office',
            attributes: ['name', 'label', 'id', 'value'],
          },
          {
            model: Picture,
            as: 'avatar',
            attributes: ['name', 'path', 'src'],
          },
        ],
      });
      const { originalname: name, filename: path } = req.file;

      if (!member) {
        return res.status(401).json({ error: 'Integrante não encontrado!' });
      }
      if (!member.avatar_id || member.avatar_id === 3) {
        const lastId = await Picture.max('id');
        const picture = await Picture.create({ id: lastId + 1, name, path });
        member.update({ avatar_id: picture.id, avatar: picture });

        return res.json(member);
      }

      const picture = await Picture.findByPk(member.avatar_id);
      const filePath = resolve(uploadConfig.folderUpload, picture.path);

      await fs.promises.unlink(filePath);
      // eslint-disable-next-line no-empty

      await picture.update({ name, path });
      member.update({ avatar_id: picture.id, avatar: picture });

      return res.json(member);
    } catch (err) {
      return res.json(err);
    }
  }
}

export default new MemberAvatarController();
