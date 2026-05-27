use bitflags::{bitflags, Flags};
use smallvec::SmallVec;

bitflags! {
    #[derive(Copy, Clone, PartialEq)]
    pub(super) struct Technolgies: u16 {
        const NONE = 0;
        const RUST = 1;
        const YEW = 1 << 1;
    }
}

impl Default for Technolgies {
    fn default() -> Self {
        Self::NONE
    }
}

impl Technolgies {
    pub(super) fn get_img_sources(&self) -> SmallVec<[(&'static str, u32); 16]> {
        let s = *self;

        if s == Self::NONE {
            return SmallVec::new();
        }

        let mut v = SmallVec::new();

        if s.intersects(Self::RUST) {
            v.push(("rust-logo-white-outline.svg", 5));
        }

        if s.intersects(Self::YEW) {
            v.push(("yew-logo.svg", 0));
        }

        v
    }
}
